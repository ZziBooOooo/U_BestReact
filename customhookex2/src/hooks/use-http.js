import React, { useEffect, useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    console.log(requestConfig, applyData);
    setIsLoading(true);
    setError(null);
    // 이때, App.js에서는 GET요청이므로 두번째 인자가 필요없다
    // 따라서, 아래와 같이 requestConfig.XXX를 이용해 작성함
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      // 이 훅을 사용하는 곳들마다 데이터를 받은 후 하는 일이 다르다.
      // 이를 applyData라는 인자로 받아 실행시키는 방법
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
