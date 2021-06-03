import { WebPlugin } from '@capacitor/core';
import { RateAppPlugin } from './definitions';
export declare class RateAppWeb extends WebPlugin implements RateAppPlugin {
    requestReview(): Promise<void>;
}
