import RouteTemplate from './RouteTemplate';
import React, {useState, useEffect} from 'react';
import Jimp from 'jimp';
import { GifFrame, GifUtil, GifCodec, BitmapImage } from 'gifwrap';

export default function Home() {
    const [file, setFile] = useState(null);
    const [src, setSrc] = useState(undefined);

    const glow = async (file,brightness,opacity) => {
      const base64String = await readAsDataURLAsync(file);
      let jimg = await Jimp.read(base64String);
      let clone = jimg.clone();
      clone
      .brightness(0.2)
      .opacity(0.2);
      return clone.getBase64Async(clone.getMIME());
    };

    useEffect(async () => {
      if(file){
        setSrc(await glow(file));
      }
      return function cleanup(){
        setSrc(null);
      };
    }, [src,file]);
    /* YOU CAN USE BASE64 STRING IN <IMG>SRC ATTRIBUTE */

    const changeBase64MimeType = (base64, type) => {
      // example: [String]image/jpeg
      return base64.replace(/^.+,/, `data:${type};base64,`);
      //.replace("data:", "")
      //.replace(/^.+,/, "");
    };

    const readAsDataURLAsync = (file) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
    
        reader.onloadend = (evt) => {
          resolve(evt.target.result);
        };
    
        reader.onerror = reject;
    
        reader.readAsDataURL(file);
      });
    };

    const greyscale = async (file) => {
      const base64String = await readAsDataURLAsync(file);
      let jimg = await Jimp.read(base64String);
      let clone = jimg.clone();
      clone.greyscale();
      return clone.getBase64Async(clone.getMIME());
    };

    

    const createGif = async (file) => {
      const base64String = await readAsDataURLAsync(file);
      console.log("Reading: "+base64String);
      let jimg = await Jimp.read(base64String);
      let clone = jimg.clone();
      jimg.greyscale();

      // Convert JIMP to (GIFWRAP) BitmapImage
      let cloneBitmapImage = new BitmapImage(clone.bitmap);
      let jimgBitmapImage = new BitmapImage(jimg.bitmap);

      // Reduce the number of colors to 256
      const maxColorIndexes = 256;
      GifUtil.quantizeDekker(cloneBitmapImage, maxColorIndexes);
      GifUtil.quantizeDekker(jimgBitmapImage, maxColorIndexes);

      // Create frames
      const f1 = new GifFrame(200,200,{delayCentisecs:10});
      f1.bitmap = clone.bitmap;
      const f2 = new GifFrame(200,200,{delayCentisecs:10});
      f2.bitmap = jimg.bitmap;
      let farr = [f1,f2];

      // Create gif
      const codec = new GifCodec();
      const gif = await codec.encodeGif(farr, { loops: 0 });
      const gifBlob = new Blob(new Uint8Array(gif.buffer), {type: 'image/gif'});

      const base64GifString = await readAsDataURLAsync(gifBlob);                
      console.log("Result: "+base64GifString);
      setSrc(base64GifString);
      
    };

    const onChange = async (e) => {
      const file = e.target.files[0];
      setFile(file);
      /*switch(options){
        case 'greyscale': setSrc(await greyscale(file));
        break;
        case 'glow': 
        break;
        default: setSrc(URL.createObjectURL(file));
      }*/

      //createGif(file);
    };


    return (
      <RouteTemplate>
        <div>
          <input type="file" accept="image/png, image/jpeg, image/gif" onChange={onChange} />
          <img width="400" height="400" className="file-preview" src={src} />
        </div>
      </RouteTemplate>
    );
}