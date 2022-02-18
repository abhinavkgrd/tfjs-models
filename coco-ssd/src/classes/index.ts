import { ObjectDetectionTrainingDataset } from '..';
import { CLASSES as coco_classes } from './coco_classes';
import { CLASSES as open_images_classes } from './open_images_classes';

export interface ObjectDetectionClass {
    name: string;
    id: number;
    displayName: string;
}

const CLASSES: {
    [key in ObjectDetectionTrainingDataset]: {
        [key: string]: ObjectDetectionClass;
    };
} = {
    coco: coco_classes,
    open_images: open_images_classes,
};

export { CLASSES };
