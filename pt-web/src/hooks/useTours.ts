import {useCallback, useEffect, useState} from "react";
import {listTours} from "src/api/tours";
import type {TourView} from "src/types/tour";

type State = {
  data: TourView[] | null;
  loading: boolean;
  error: string | null;
};

export function useTours() {
  const [state, setState] = useState<State>({data: null, loading: true, error: null});

  const load = useCallback(async () => {
    setState(s => ({...s, loading: true, error: null}));
    try {
      const data = await listTours();
      setState({data, loading: false, error: null});
    } catch (e) {
      setState({data: null, loading: false, error: e instanceof Error ? e.message : String(e)});
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    reload: load,
  };
}
