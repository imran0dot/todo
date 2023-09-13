import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  addInput: string
}

const FormAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }


  return (
    <div className="shadow-md p-6 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="w-full border p-2" {...register("addInput", { required: true })} />
        {errors.addInput && <span className="text-red-600">Please Text something</span>}
        <div className="flex justify-center items-center">
          <input className="btn bg-blue-400 p-3 text-white mt-10" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default FormAdd;