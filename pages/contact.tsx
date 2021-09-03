import "animate.css/animate.min.css";
import { useForm } from "react-hook-form";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { cssTransition, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const zoomIn = cssTransition({
    enter: "animate__animated animate__zoomIn",
    exit: "animate__animated animate__zoomIn",
  });

export default function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();
  async function onSubmitForm(values: any): Promise<void> {
    let config: AxiosRequestConfig = {
      method: "post",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);

      if (response.status === 200) {
        toast.success("Your mail submitted!", {
          position: toast.POSITION.TOP_CENTER,
          transition: zoomIn,
        });
        reset();
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="max-w-full p-8 m-8 bg-white rounded-md">
        <ToastContainer />
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "You most enter name",
                },
              })}
              className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.name ? 'ring-2 ring-red-500' : null}`}
               placeholder="Full name"
            />
            <span className="py-2 text-sm text-red-400">{errors?.name?.message}</span>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "You most enter email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "invalid email address"
                }
              })}
              className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.email ? 'ring-2 ring-red-500' : null}`}
              placeholder="Email"
            />
            <span className="py-2 text-sm text-red-400">{errors?.email?.message}</span>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              {...register("phone")}
              className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2"
              placeholder="Phone"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              {...register("message", {
                required: {
                  value: true,
                  message: 'You need to enter your message'
                },
                maxLength: {
                  value: 1000,
                  message: "You message can't be more than 1000 characters"
                },
                minLength: {
                  value: 50,
                  message: "You message must be longer then this!"
                }
              })}
              className={`block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2
               ${errors.message ? 'ring-2 ring-red-500' : null}`}
              placeholder="Message"
            />
            <span className="py-2 text-sm text-red-400">{errors?.message?.message}</span>
          </div>
          <div>
            <button
              type="submit"
              className="px-16 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
  );
}






