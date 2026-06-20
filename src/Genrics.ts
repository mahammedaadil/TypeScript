interface ApiResponse<T>{

    success:boolean,
    data:T
}

interface User{
    name:string,
    email:string
}

const user:ApiResponse<User>={
    success:true,
    data:{
        name:"aadil",
        email:"a.c"
    }
}

console.log(user);
