import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import EnrolledProgram from "../EnrolledProgram.vue";

describe("EnrolledProgram", () => {
  it("renders properly", () => {
    const wrapper = mount(EnrolledProgram, {
      props: { program: { title: "Example Program" } },
    });
    expect(wrapper.text()).toContain("Example Program");
  });
});
