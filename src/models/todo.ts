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

export const getNextStatus = (status: TodoStatus) => {
  if (status === TodoStatus.TODO) return TodoStatus.IN_PROGRESS;
  if (status === TodoStatus.IN_PROGRESS) return TodoStatus.DONE;
  return TodoStatus.DONE;
};
