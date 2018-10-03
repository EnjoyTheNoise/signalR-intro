import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import {
  notifyValueAdded,
  notifyValueDeleted,
  getAllValues
} from "./signalRActions";
import { HUB_URL } from "../constants";

export function signalRStart(store, callback) {
  const hubConnection = new HubConnectionBuilder()
    .withUrl(HUB_URL)
    .configureLogging(LogLevel.Debug)
    .build();

  hubConnection.on("Add", value => {
    notifyValueAdded(value)(store.dispatch);
  });
  hubConnection.on("Delete", value => {
    notifyValueDeleted(value)(store.dispatch);
  });

  getAllValues()(store.dispatch).then(() => {
    hubConnection.start().then(() => {
      callback();
    });
  });
}
