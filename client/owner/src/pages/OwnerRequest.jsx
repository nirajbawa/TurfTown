import { Link } from "react-router-dom";
import useOwnerRequest from "@hooks/useOwnerRequest";
import { Button, FormField } from "@components/common";

const OwnerRequest = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useOwnerRequest();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl border">
        <div className="card-body max-md:p-4">
          <h2 className="card-title justify-center text-2xl mb-6">Send Request</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="lg:grid grid-cols-2 gap-4">
              <FormField
                label="Name"
                name="name"
                type="text"
                register={register}
                error={errors.name}
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="text"
                register={register}
                error={errors.phone}
              />
            </div>
            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
            />

            <div className="form-control mt-12 pt-6 ">
              <Button
                type="submit"
                className="btn-primary w-full"
                loading={loading}
              >
                Send
              </Button>
            </div>
          </form>
          <div className="text-center mt-6">
            <Link to="/login" className="link link-hover">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerRequest;
