export interface TestCase {
    id: string;
    title: string;
    description: string;
    steps: string[];
    expected_result: string;
    actualResult?: string;
    status: string;
    priority: string;
    type: string;
    automated: boolean;
    requirement_ids: string[];
    created_by: string;
    last_updated: string;
    version: string;
  }
  