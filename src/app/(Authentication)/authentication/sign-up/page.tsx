import { SignIn } from "@clerk/nextjs";

const SignUp = () => {
    return (
        <SignIn routing="hash" signUpUrl="/sign-in" />
    );
};

export default SignUp;
