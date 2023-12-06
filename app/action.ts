"use server";

export async function formSubmit(formData: FormData) {
  const nombre = formData.get("name");
  const email = formData.get("email");
  const celular = formData.get("celular");
  const message = formData.get("message");

  console.log(nombre, email, celular, message);

  return true;
}
