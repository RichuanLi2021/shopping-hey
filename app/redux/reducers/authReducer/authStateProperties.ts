import type { User, SignupValues, LoginValues } from "~/features/usr_auth/types/auth";

export default interface AuthState {
    pendingSignup?: SignupValues; //form data to be sent
    pendingLogin?: LoginValues;

    currentUsers: User | null;
    jwtToken: string | null;
    
    loading: boolean;
    error: string | null;
}


// 1. need AuthState for admin dashboard: Admin dashboard that lists all registered users
// 2. need AuthState for Chat app: Chat app keeping a roster of online users


