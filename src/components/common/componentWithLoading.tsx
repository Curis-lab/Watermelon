import Loading from "./Loading";

export default function componentWithLoading<T>(
  Component: React.ComponentType<T>
) {
  return ({ loading, ...props }: { loading: boolean } & T) =>
    loading ? <Loading /> : <Component {...(props as React.JSX.Element & T)} />;
}
