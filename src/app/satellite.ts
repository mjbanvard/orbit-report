import { checkServerIdentity } from 'tls';


export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    
    constructor (
        name: string, 
        type: string, 
        launchDate: string, 
        orbitType: string, 
        operational: boolean
    ) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    };

    shouldShowWarning() {
        checkType: Boolean;
        if (this.type = "Space Debris") {
            check = True;
        } else {
            check = False;
        }
        return checkType;
    }
}
