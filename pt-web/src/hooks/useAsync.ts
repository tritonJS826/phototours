import {useCallback, useEffect, useState} from "react";

type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string;
  reload: () => void;
};

export function useAsync<T>(runner: () => Promise<T>, deps: unknown[] = []): AsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const exec = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const result = await runner();
      setData(result);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unexpected error";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, deps);

  useEffect(() => {
    exec();
  }, [exec]);

  return {data, loading, error, reload: exec};
}
