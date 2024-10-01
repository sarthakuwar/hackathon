import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = "https://elderly.dedomil.workers.dev/"

export function useGetElderProfile(session) {
    return useQuery({
        queryKey: ["getElderProfile", session?.user?.email],
        queryFn: async () => {
            if (!session?.user?.email) {
                throw new Error("Email is required");
            }
            const response = await axios.get(`${API_URL}/elder/data/all/?email=${session.user.email}`, {
                params: {  },
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        },
        enabled: !!session?.user?.email,
        refetchOnWindowFocus: "always",
        retry: false
    });
}
export function useGetElderTasks() {
    return useQuery({
        queryKey: ["getElderTasks"],
        queryFn: async () => {
            return (
                await axios.get(`${API_URL}/data/all`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${value}`,
                    },
                })
            ).data;
        },
    });
}