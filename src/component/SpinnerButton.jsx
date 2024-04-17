import { ReloadIcon } from "@radix-ui/react-icons";
export const SpinnerButton = ({ onClick, isLoading, name, ...props }) => {
  return (
    <>
      {isLoading ? (
        <btn disabled {...props}>
          <ReloadIcon className=" mr-2 h-4 w-4 animate-spin" />
          Please wait
        </btn>
      ) : (
        <btn {...props} onClick={onClick} type="submit">
          {name}
        </btn>
      )}
    </>
  );
};
