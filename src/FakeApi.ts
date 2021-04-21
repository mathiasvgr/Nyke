export interface Description {
    title : string
    description : string
    link : string
    type : string
}

export interface Model {
    description : Description
    sizes : Array<string>
    path : string
    added : boolean
}

class FakeAPI {
    private _modelsArray : Array<Model>;

    constructor() {
        this._modelsArray = [
            {
                description : {
                    title : "Nike Air Zoom SuperRep 2",
                    description : "The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT, sprints and other intense workouts. Multi-layered construction and Zoom Air cushioning ensure support and comfort as you lunge, jump and push your limits with every rep. The wider toe box design gives you a perfect fit.",
                    link : "https://www.google.com/shopping/product/1128880628792172360?q=Nike+Air+Zoom+SuperRep+2&biw=1920&bih=944&sxsrf=ALeKk01Z_b34Y6FHevGgykgCuLYVT7LTFA:1616280539921&oq=Nike+Air+Zoom+SuperRep+2&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgIIADIECAAQGDIECAAQGDIECAAQGDIECAAQGDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgjECdQ9psBWPabAWCBngFoAHAAeACAAV2IAagBkgEBMpgBAKABAqABAcABAQ&sclient=products-cc&uact=5&prds=epd:16199086322878391946,prmr:3&sa=X&ved=0ahUKEwjasLem-r_vAhWHohQKHT7CBkoQvxMI_Ao",
                    type : "MEN" 
                },
                sizes : ["8", "8.5", "9", "9.5", "10", "10.5", "12", "14", "18"],
                path : "models/Nike_Air_Zoom_SuperRep_2.png",
                added: false,
            },
            {
                description : {
                    title : "Nike React Escape Run",
                    description : "Walk the city streets in the Nike Escape Run. Designed for her, it features a wider collar and embroidered details. Soft foam provides soft, dynamic cushioning for everyday asphalt tread.",
                    link : "https://fr.aboutyou.com/p/nike/chaussure-de-course-react-escape-run-5729721?vid=43350065&quick=view&utm_source=google&utm_medium=cpc&utm_campaign=PLA_FR_AP_Best_Brand_NK_CSS_S24&gclid=Cj0KCQjwutaCBhDfARIsAJHWnHsTVDducJhKkDn1fU18YDjSM3m3upcXXiWjik2RrPU7bvs74MIeNZYaAm-BEALw_wcB",
                    type : "WOMEN" 
                },
                sizes : ["7", "8", "8.5", "9", "12"],
                path : "models/Nike_React_Escape_Run.png",
                added: false,
            },
            {
                description : {
                    title : "Nike Air Max 2090",
                    description : "The Nike Air Max 2090. These everyday kicks let you peek into more Air underfoot than the original 90. Add colors that pay homage to the OGs of Max Air, and you get a sweet classic touch.",
                    link : "https://www.google.com/shopping/product/6721617008536470313?q=Nike+Air+Max+2090&sxsrf=ALeKk007KYINxKGXP5pfxM-148teFz-YXw:1616280458030&biw=1920&bih=944&prds=epd:13354282331821372228,prmr:1&sa=X&ved=0ahUKEwjlk-eG-r_vAhXMC2MBHdT5BBwQvxMIuQs",
                    type : "CHILD" 
                },
                sizes : ["8", "8.5", "9.5", "11.5"],
                path : "models/Nike_Air_Max_2090.png",
                added: false,
            }
        ]
    }


    public getModels() : Array<Model>{
        return this._modelsArray;
    }

    public getNbModels() : number {
        return this._modelsArray.length;
    }

    public getModel(index: number): Model | undefined {
        if (index < 0 && index > this._modelsArray.length) {
            return undefined;
        }

        return this._modelsArray[index];
    }

    public addedToBag(index: number, bool: boolean) {
        const model = this.getModel(index);

        if (model) {
            model.added = bool;
        }
    }
}

export default FakeAPI;