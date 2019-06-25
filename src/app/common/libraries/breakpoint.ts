export class Breakpoint{

    private static SMALL:number = 320;
    private static MEDIUM:number = 640;
    private static LARGE:number = 1040;
    private static XLARGE:number = 1200;
    private static ULTRA:number = 1600;
    
    constructor(){}

    public static isSmall(){
        return window.innerWidth<this.MEDIUM;
    }

    public static isMedium(){
        var width = window.innerWidth;
        return width>=this.MEDIUM && width<this.LARGE;
    }

    public static isLarge(){
        var width = window.innerWidth;
        return width>=this.LARGE && width < this.XLARGE;
    }

    public static isXLarge(){
        var width = window.innerWidth;
        return width>=this.XLARGE && width<this.ULTRA;
    }

    public static isUltra(){
        return window.innerWidth>=this.ULTRA;
    }

}