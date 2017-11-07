export class Student{
  constructor(
    public rut:string,
    public nombres:string,
    public apellidoParteno: string,
    public apellidoMaterno: string,
    public email: string,
    public emailConfirmacion: string,
    public calle: string,
    public numero: string,
    public departamento: string,
    public fechaNacimiento: Date,
    public codigoVendedor: string,
  ){};
}
