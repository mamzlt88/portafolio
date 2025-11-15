import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

/**
 * Wrap navigate with the View Transition API when available.
 * Falls back to normal navigation where unsupported.
 */
export function useViewTransitionNavigate() {
  const navigate = useNavigate();

  return (to: string, options?: { replace?: boolean; state?: any }) => {
    const go = () => flushSync(() => navigate(to, { replace: options?.replace, state: options?.state }));
    const stv = (document as any).startViewTransition?.bind(document);
    if (stv) {
      const html = document.documentElement;
      const tx = stv(go);
      // Add the running flag only after snapshots are ready to avoid hiding live DOM too early.
      Promise.resolve(tx?.ready).then(() => {
        html.classList.add('vt-running');
      });
      // Remove the running flag when the transition is over
      Promise.resolve(tx?.finished).finally(() => {
        html.classList.remove('vt-running');
      });
    } else {
      go();
    }
  };
}
