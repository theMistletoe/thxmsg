import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";
import WorkspaceID from "~/components/WorkspaceID.vue";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe("WorkspaceID.vue", () => {
  test("renders props.workspaceID when passed", () => {
    const workspaceID = "xxxxxxx";
    const wrapper = shallowMount(WorkspaceID, {
      propsData: { workspaceID },
      localVue
    });
    expect(wrapper.text()).toBe("WorkspaceID:xxxxxxx URL Copy!");
  });
});
