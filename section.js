class sectionClass {
    constructor (nameP, headerP, levelP, inputP, baseP){
        this.nameTxt = nameP;
        this.headerTxt = headerP;
        this.levelNum = levelP;   
        this.inputArray = inputP;
        this.baseArray = baseP;
    }; //constructor

    getSection() {
        
        var returnText = "";

        //Add hash tags for header level
        for (let i = 1; i <= this.levelNum; i++) {
            returnText += "#";            
        }

        //Add header name
        returnText += ` ${this.headerTxt} /n  /n`

        //Build out section body
        for (let i = 0; i < this.baseArray.length; i++) {
            returnText += this.baseArray[i];
            if (this.inputArrayP[i]){
                returnText += this.inputArray[i];
            }
        };
    
        return returnText;

    }; //getSection

    buildLink (pathP, Txtp) {
        return `[${TxtP}](${pathP})`;
    };
    
    buildImage (pathP, altTxtP) {
        return `!${this.buildLink(pathP, altTxtP)}`
    }

    buildUListItem (textP) {
        return `- ${textP}  /n`;
    }
    
    buildOListItem (textP, numP) {
        return `${numP}. ${textP}  /n`;
    }



} //sectionClass