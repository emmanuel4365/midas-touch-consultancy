import { GalleryPageWrapper } from "../index";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import photo1 from "../../assets/gallery/galleryPhoto1.jpeg";
import photo2 from "../../assets/gallery/galleryPhoto2.jpeg";
import photo3 from "../../assets/gallery/galleryPhoto3.jpeg";
import photo4 from "../../assets/gallery/galleryPhoto4.jpeg";
import photo5 from "../../assets/gallery/galleryPhoto5.jpeg";
import photo6 from "../../assets/gallery/galleryPhoto6.jpeg";
import photo7 from "../../assets/gallery/galleryPhoto7.jpeg";
import photo8 from "../../assets/gallery/galleryPhoto8.jpeg";
import photo9 from "../../assets/gallery/galleryPhoto9.jpeg";
import photo10 from "../../assets/gallery/galleryPhoto10.jpeg";
import photo11 from "../../assets/gallery/galleryPhoto11.jpeg";
import photo12 from "../../assets/gallery/galleryPhoto12.jpeg";
import photo13 from "../../assets/gallery/galleryPhoto13.jpeg";
import photo14 from "../../assets/gallery/galleryPhoto14.jpeg";
import photo15 from "../../assets/gallery/galleryPhoto15.jpeg";
import photo16 from "../../assets/gallery/galleryPhoto16.jpeg";
import photo17 from "../../assets/gallery/galleryPhoto17.jpeg";
import photo18 from "../../assets/gallery/galleryPhoto18.jpeg";
import photo19 from "../../assets/gallery/galleryPhoto19.jpeg";
import photo20 from "../../assets/gallery/galleryPhoto20.jpeg";


const GalleryPage = () => {
    window.scrollTo(0, 0);

    const [index, setIndex] = useState(-1);

    const photos = [
        {
            src: photo1,
            width: 801,
            height: 450,
        },
        {
            src: photo2,
            width: 801,
            height: 450,
        },
        {
            src: photo3,
            width: 525,
            height: 700,
        },
        {
            src: photo4,
            width: 667,
            height: 500,
        },
        {
            src: photo5,
            width: 600,
            height: 450,
        },
        {
            src: photo6,
            width: 600,
            height: 450,
        },
        {
            src: photo7,
            width: 600,
            height: 450,
        },
        {
            src: photo8,
            width: 525,
            height: 700,
        },
        {
            src: photo9,
            width: 525,
            height: 700,
        },
        {
            src: photo10,
            width: 525,
            height: 700,
        },
        {
            src: photo11,
            width: 600,
            height: 450,
        },
        {
            src: photo12,
            width: 600,
            height: 450,
        },
        {
            src: photo13,
            width: 1080,
            height: 486,
        },
        {
            src: photo14,
            width: 678,
            height: 450,
        },
        {
            src: photo15,
            width: 679,
            height: 450,
        },
        {
            src: photo16,
            width: 375,
            height: 500,
        },
        {
            src: photo17,
            width: 675,
            height: 450,
        },
        {
            src: photo18,
            width: 675,
            height: 450,
        },
        {
            src: photo19,
            width: 978,
            height: 450,
        },
        {
            src: photo20,
            width: 600,
            height: 450,
        },
    ];

    return (
        <GalleryPageWrapper>
            <PhotoAlbum
                layout="rows"
                photos={photos}
                targetRowHeight={250}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={photos}
                index={index}
                plugins={[Zoom, Thumbnails]}
            />
        </GalleryPageWrapper>
    );
};
export default GalleryPage;