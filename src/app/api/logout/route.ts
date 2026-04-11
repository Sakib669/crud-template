import { auth } from "@/lib/auth/server"

export const GET = async () => {
    await auth.signOut()
}