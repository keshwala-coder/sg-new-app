export default function LoginRadioInput() {
    return(
        <ul className="radio-list text-[0.938rem]">
        <li className="mx-2 my-4">
          <input
            type="radio"
            name="select-split-panel"
            id="select-left"
          />
          <label htmlFor="select-left" className="pl-6 text=[0.938rem]">
            I have an existing RealMe login
          </label>
        </li>
        <li className="mx-2 my-4">
          <input
            type="radio"
            name="select-split-panel"
            id="select-right"
          />
          <label htmlFor="select-right" className="pl-6">I need to create a login</label>

        </li>
      </ul>
    )
}