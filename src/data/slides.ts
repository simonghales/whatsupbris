
const slide1Image: string = './assets/images/mobile/Img_Slide1.png';
const slide1Image2x: string = './assets/images/mobile/Img_Slide1@2x.png';
const slide2Image: string = './assets/images/mobile/Img_Slide2.png';
const slide2Image2x: string = './assets/images/mobile/Img_Slide2@2x.png';
const slide3Image: string = './assets/images/mobile/Img_Slide3.png';
const slide3Image2x: string = './assets/images/mobile/Img_Slide3@2x.png';
const slide4Image: string = './assets/images/mobile/Img_Slide4.png';
const slide4Image2x: string = './assets/images/mobile/Img_Slide4@2x.png';

export interface SlideInterface {
    title: string,
    description: string,
    image: string,
    image2x: string
}

const SLIDE_1: SlideInterface = {
    title: 'Soundtrack Your Wedding',
    description: 'Add time slots for each stage of your wedding such as the processions, dinner, cake cutting, first dance and party time. Each stage name and duration are customizable to ensure that everything runs on time.',
    image: slide1Image,
    image2x: slide1Image2x
};

const SLIDE_2: SlideInterface = {
    title: 'Be Inspired',
    description: 'Browse inspiration and genre-based suggestions to find the perfect score.  Fill each wedding stage with your desired music while ensuring that your choices fit within the allocated time.',
    image: slide2Image,
    image2x: slide2Image2x
};

const SLIDE_3: SlideInterface = {
    title: 'Get Recommendations',
    description: 'Get music recommendations based on select themes, popularity and danceability.',
    image: slide3Image,
    image2x: slide3Image2x
};

const SLIDE_4: SlideInterface = {
    title: 'Save to Spotify',
    description: 'Save your wedding soundtrack as playlists ready for your special day. Play and download these at any time on Spotify.',
    image: slide4Image,
    image2x: slide4Image2x
};

export const SLIDES: SlideInterface[] = [
    SLIDE_1,
    SLIDE_2,
    SLIDE_3,
    SLIDE_4
];