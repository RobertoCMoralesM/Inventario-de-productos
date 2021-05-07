class Producto{
    constructor(Nombre,Precio,ID,Cantidad){
            this.ID=ID;
            this.Nombre=Nombre;
            this.Precio=Precio;
            this.Cantidad=Cantidad;
            this.siguiente=null;
    }
    info(){
        return "ID: "+this.ID+"<br>"+"Nombre: "+this.Nombre+"<br>"+"Precio: "+this.Precio+"<br>"+"Cantidad: "+this.Cantidad+"<br>";
    }
}

class Inventario{

    constructor(){
        this.inicio=null;
      }

agregar(nuevo){
    if (this.inicio==null)
        this.inicio=nuevo;
    else{
        let temp=this.inicio;
        while(temp.siguiente!=null)
            temp=temp.siguiente;
         temp.siguiente=nuevo;
  }
}

listar(){
    let res="";
    let temp=this.inicio;
    while (temp!=null){
      res += temp.info() + "<br>"
      temp=temp.siguiente;
    }
    return res;
  }

  eliminar(ID){
    //destructores
    if (this.inicio!=null){
        if (this.inicio.ID==ID)
          this.inicio=this.inicio.siguiente;
        else{
          let t=this.inicio;
          while( t.siguiente!=null){
            if (t.siguiente.ID==ID){
              t.siguiente=t.siguiente.siguiente;
              return true;
            }
            else
              t=t.siguiente;
          }
          return false;
        }
    }
  }

  buscar(ID){
    let temp=this.inicio;
    while(temp!=null){
      if (ID==temp.ID)
        return temp;
      else
        temp=temp.siguiente;
    }
    return null;
  }
}

let Tienda=new Inventario();

function Borrar(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("lista").innerHTML="";
}

function Agregar(){
    let ID,Nombre,Precio,Cantidad
    ID=document.getElementById("ID").value;    
    Nombre=document.getElementById("Nombre").value;
    Precio=document.getElementById("Precio").value;
    Cantidad=document.getElementById("Cantidad").value;
    let pro=new Producto(Nombre,Precio,ID,Cantidad);
    Tienda.agregar(pro);

    document.getElementById("ID").value="";
    document.getElementById("Nombre").value="";
    document.getElementById("Precio").value="";
    document.getElementById("Cantidad").value="";

    alert("El producto fue agregado");

}

function Buscar(){
    let ID=document.getElementById("textoabuscar").value;
    let res=Tienda.buscar(ID);
    if (res==null) {
        document.getElementById("resultado").innerHTML="Escriba el ID";
        document.getElementById("textoabuscar").value="";
    }else{
        document.getElementById("resultado").innerHTML="Se encontró <br>"+res.info();
        document.getElementById("textoabuscar").value="";
        
    }
}

function Eliminar2(){
    let ID=document.getElementById("textoabuscar").value;
    let res=Tienda.eliminar(ID);
    if (res==null) {
        document.getElementById("resultado").innerHTML="Escriba el ID";
        document.getElementById("textoabuscar").value="";
    }
}


function lista(){
    document.getElementById("lista").value="";
    let res=Tienda.listar();
    document.getElementById("lista").innerHTML=res;
    
}



//document.write(grupo2c.listar());




