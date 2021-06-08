
jest.mock("../src/libs/cloudWatchClient.js");
jest.mock("@aws-sdk/client-cloudwatch");

// Get service clients module and commands.
import 'regenerator-runtime/runtime'
import { run, params } from "../src/putMetricAlarm.js";
import { cwClient } from "../src/libs/cloudWatchClient";

describe("@aws-sdk/client-cloudwatch mock", () => {
  it("should run async equal", async (done) => {
    expect(1).toBe(1);
    done();
  });

  it("should be equal", () => {
    expect(1).toBe(1);
  });

  it("should successfully mock CloudWatch client", async () => {
    cwClient.send.mockResolvedValue({ isMock: true });
    const response = await run(params);
    expect(response.isMock).toEqual(true);
  });
});
