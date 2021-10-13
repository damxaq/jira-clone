export enum TodoStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export type Todo = {
  id: number;
  title: string;
  status: TodoStatus;
};
