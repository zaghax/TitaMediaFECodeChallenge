import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants';
import { errorTypes, usersDataTypes } from '../../types/types';


type params = string;
type apiType = string | undefined

const useHttp = (URL_PARAMS:params) => {

    const APIKEY:apiType  = process.env.REACT_APP_DUMMYAPIKEY;
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetchData = async () => {
        try{

            const request = await fetch(`${API_BASE_URL}${URL_PARAMS}`, {
                headers: {
                'app-id': APIKEY || ''
                }
            });

            const fetchData = await request.json();

            if(fetchData.error){
                setError(fetchData.error)
            }else {
                setData(fetchData);
            }
            
            setIsLoading(false);

        } catch (error:any){
            console.log(error)
            setError('Failed to fetch!')
            setIsLoading(false);
        }
        
    } 

    useEffect(() => {
        fetchData();
    },[]) 

    return {data, isLoading, error}

}



export default useHttp;