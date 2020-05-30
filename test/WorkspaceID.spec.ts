import { shallowMount } from "@vue/test-utils";
import WorkspaceID from "~/components/WorkspaceID.vue";

describe("WorkspaceID.vue", () => {
  test("renders props.workspaceID when passed", () => {
    const workspaceID = "xxxxxxx";
    const wrapper = shallowMount(WorkspaceID, {
      propsData: { workspaceID }
    });
    expect(wrapper.text()).toMatch("workspaceID");
  });
});
