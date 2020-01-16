/* @flow */
import React from "react"

import {changeSearchBarInput} from "../state/actions"
import BoomGetModal from "./BoomGetModal"
import logInto from "../test/helpers/loginTo"
import Modal from "../state/Modal"
import provide from "../test/helpers/provide"
import submitSearch from "../flows/submitSearch"

test("renders with boom get command", async () => {
  let {store} = await logInto("cluster1", "space1")

  store.dispatchAll([
    changeSearchBarInput("hi"),
    submitSearch(),
    Modal.show("boom-get")
  ])

  let wrapper = provide(store, <BoomGetModal />)
  wrapper
    .find("input[type='checkbox']")
    .simulate("change", {target: {checked: true}})
  wrapper.find("input[value='Copy']").simulate("click")
  wrapper.find("input[value='Done']").simulate("click")

  expect(Modal.getName(store.getState())).toBe("")
})
