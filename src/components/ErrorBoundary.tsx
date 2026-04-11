import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex items-center justify-center min-h-screen bg-white">
            <p className="font-['DM_Mono',monospace] text-[14px] text-black uppercase tracking-wide">
              Something went wrong. Please refresh.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
