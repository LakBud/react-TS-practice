// Formula: const Component = ({ prop }: { prop: Type }) => {...}
// string → text, () => void → function w/out args, boolean → true/false flag
// For React events: use MouseEventHandler<Element> instead of () => void
// For reuse: extract { prop: Type } into interface or type alias

const Buttons = ({ label, onClick, disabled }: { label: string; onClick: () => void; disabled: boolean }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

export default Buttons;
