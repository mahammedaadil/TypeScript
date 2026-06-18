interface MyOffice{
    shop_no:number,
    name?:string,
    isHavingAC:boolean
}

interface GruhamComplex extends MyOffice{
    total_shops:number,
    common_address:string
}

//Required
const checkReq: Required<GruhamComplex> = {
    shop_no: 101,
    name: "ABC Office",
    isHavingAC: true,
    total_shops:25,
    common_address:"kosad"
};

//Omit
const checkOmit:Omit<GruhamComplex,"shop_no">={
    name: "ABC Office",
    isHavingAC: true,
    total_shops:25,
    common_address:"kosad"
}

//Pick
const checkPick:Pick<GruhamComplex,"shop_no" | "total_shops" |"isHavingAC">={
    shop_no:500,
    total_shops:300,
    isHavingAC:false
}

//Partial
const checkPartial:Partial<GruhamComplex>={
    shop_no:300
}
console.log(checkReq);
console.log(checkOmit);
console.log(checkPick);
console.log(checkPartial);


