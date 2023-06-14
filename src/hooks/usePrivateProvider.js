import { axioPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = ()=>{
    const refresh = useRefreshToken();
    const {auth} = useAuth()
    
    useEffect(()=>{
        const requestIntercept = axioPrivate.interceptors.response.use(
            config=>{
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`
                }
                return config
            },(error) => Promise.reject(error)
        )
        const responseIntercept = axioPrivate.interceptors.response.use(
            response => response,
            async (error)=>{
                const prevRequest = error?.config;
                if (error?.response?.config === 403 && !prevRequest?.sent){
                    prevRequest.sent = true
                    const newAccessToken = await refresh()
                    prevRequest.header['Authorization' = `Bearer ${newAccessToken}`];
                    return axioPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return ()=>{
            axioPrivate.interceptors.response.eject(responseIntercept)
            axioPrivate.interceptors.request.eject(requestIntercept)
        }
    },[auth, refresh])

    return axioPrivate
}

export default useAxiosPrivate