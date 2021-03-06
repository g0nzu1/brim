/* @flow */

import getTestState from "../../test/helpers/getTestState"
import migrate from "./202007140829_defaultColumnHeadersToAuto"

test("migrating 202007140829_defaultColumnHeadersToAuto", () => {
  const {data} = getTestState("v0.12.0")

  let next = migrate(data)

  // $FlowFixMe
  for (const {state} of Object.values(next.windows)) {
    for (const {layout} of state.tabs.data) {
      expect(layout.columnHeadersView).toEqual("AUTO")
    }
  }
})
