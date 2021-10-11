import axios from 'axios';

async function getMetMuseumArtObjects(query) {
    let result = null;
    try {
        result = await axios.get(`http://localhost:5000/getMetMuseumSearch/${query}`).data;
    } catch (error) {
        console.log(error);
    }
    return result;
}

const mockData = function (){
    return [
        {
          "objectID": 544214,
          "isHighlight": true,
          "primaryImage": "https://images.metmuseum.org/CRDImages/eg/original/DP249000.jpg",
          "primaryImageSmall": "https://images.metmuseum.org/CRDImages/eg/web-large/DP249000.jpg",
          "additionalImages": [
            "https://images.metmuseum.org/CRDImages/eg/original/DP248999.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/DT234926.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/DT525.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/DP165684.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/20.3.1 detail3.tif",
            "https://images.metmuseum.org/CRDImages/eg/original/20.3.1 detail 4.tif"
          ],
          "title": "Travelling Boat being Rowed"
        },
        {
          "objectID": 546194,
          "isHighlight": true,
          "primaryImage": "https://images.metmuseum.org/CRDImages/eg/original/DP302724.jpg",
          "primaryImageSmall": "https://images.metmuseum.org/CRDImages/eg/web-large/DP302724.jpg",
          "additionalImages": [
            "https://images.metmuseum.org/CRDImages/eg/original/DP321279.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/43.2.1_EGDP013644.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/43.2.1_EGDP013645.jpg"
          ],
          "title": "Arched Harp (shoulder harp)"
        },
        {
          "objectID": 544070,
          "isHighlight": true,
          "primaryImage": "https://images.metmuseum.org/CRDImages/eg/original/DT6857.jpg",
          "primaryImageSmall": "https://images.metmuseum.org/CRDImages/eg/web-large/DT6857.jpg",
          "additionalImages": [
            "https://images.metmuseum.org/CRDImages/eg/original/DT6858.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/1992.55_front.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/1992.55_rp.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/1992.55_lp.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/DT6859.jpg",
            "https://images.metmuseum.org/CRDImages/eg/original/DT557.jpg"
          ],
          "title": "Antelope Head"
        }
      ];
};

export default {
    metMuseum: mockData,
}