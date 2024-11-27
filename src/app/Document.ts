export class Document{
    name: string;
        id: string;
        expiry: string;
        isReadonly: boolean;
        disableEdit: boolean;
        hiddenConfirm: boolean;


    constructor(name: string,id: string,expiry: string,isReadonly: boolean,disableEdit: boolean,hiddenConfirm: boolean){
        this.name = name
        this.id = id
        this.expiry = expiry
        this.isReadonly = isReadonly
        this.disableEdit = disableEdit
        this.hiddenConfirm = hiddenConfirm
    }

}