import {useCallback, useEffect, useRef, useState} from "react";
import {listTours} from "src/services/toursService";
import type {TourView} from "src/types/tour";

type State = {
  data: TourView[] | null;
  loading: boolean;
  error: string | null;
};

export function useTours() {
  const [state, setState] = useState<State>({data: null, loading: true, error: null});
  const mounted = useRef(true);

  // Wtf, it is a errored callback - used for preven infinite rerenders
  const load = useCallback(async () => {
    setState(s => ({...s, loading: true, error: null}));
    try {
      const data = await listTours();
      if (mounted.current) {
        setState({data, loading: false, error: null});
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (mounted.current) {
        setState({data: null, loading: false, error: msg});
      }
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    void load();

    return () => {
      mounted.current = false;
    };
  }, [load]);

  return {
    // TODO: remove this workaround with stars, should be fetched from server
    data: state.data?.map(item => ({...item, stars: 5.0})),
    loading: state.loading,
    error: state.error,
    reload: load,
  };
}
