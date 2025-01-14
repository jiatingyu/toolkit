export declare function getWindowSize(): {
    width: number;
    height: number;
};
export declare function scrollToTop(): void;
export declare function scrollToBottom(): void;
export declare function scrollToElement(element: any): void;
export declare function isElementInViewport(element: any): boolean;
export declare function getURLParameters(): {
    [k: string]: string;
};
export declare function setURLParameter(key: any, value: any): void;
export declare function removeURLParameter(key: any): void;
export declare function getBrowserType(): "Firefox" | "Safari" | "Edge" | "Opera" | "Chrome" | "Unknown";
export declare function getBrowserVersion(): any;
export declare function isMobileDevice(): boolean;
export declare function isTouchDevice(): boolean;
export declare function getScreenOrientation(): OrientationType;
export declare function listenScreenOrientationChange(callback: any): void;
