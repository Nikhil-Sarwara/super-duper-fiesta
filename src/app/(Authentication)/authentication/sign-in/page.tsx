import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <SignIn routing="hash" signUpUrl="/sign-up" />
    );
};

export default SignInPage;
