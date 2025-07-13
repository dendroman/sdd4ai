import { CLI_NAME, CLI_VERSION, CLI_DESCRIPTION } from '../lib/constants';

describe('Constants', () => {
  test('should have correct CLI metadata', () => {
    expect(CLI_NAME).toBe('create-spec-driven-project');
    expect(CLI_VERSION).toBe('0.1.0');
    expect(CLI_DESCRIPTION).toBe(
      'Bootstrap spec-driven development projects with ease'
    );
  });
});
