import type { ConfigurationsApiDto } from "#/modules/configurations/data/api/configurationsApiDto";
import { createRoute } from "#/modules/configurations/domain/entities/route";
import { createStops } from "#/modules/configurations/domain/entities/stop";
import * as activeStatus from "#/shared/core/domain/valueObjects/activeStatus";

export const mapStopsByAccountIdResponseToEntity = (
  response: ConfigurationsApiDto.StopsByAccountIdResponse,
) => {
  return response.data.map((stop) =>
    createStops({
      address: stop.stop_address,
      code: stop.stop_code,
      description: stop.description,
      id: stop.id,
      lat: stop.lat,
      lng: stop.lng,
      name: stop.stop_name,
      polygon: stop.polygon,
      radius: stop.radius,
      status: activeStatus.fromNumber(stop.status),
    }),
  );
};

export const mapRoutesByAccountIdResponseToEntity = (
  response: ConfigurationsApiDto.RoutesByAccountIdResponse,
) => {
  return response.data.map((route) => {
    return createRoute({
      accountId: route.account_id,
      id: route.id,
      idAlert: route.id_alert,
      code: route.route_code,
      color: route.route_color,
      direction: route.route_direction,
      distance: route.route_distance,
      end:
        route.route_end &&
        createStops({
          address: route.route_end.stop_address,
          code: route.route_end.stop_code,
          description: route.route_end.description,
          id: route.route_end.id,
          lat: route.route_end.lat,
          lng: route.route_end.lng,
          name: route.route_end.stop_name,
          polygon: route.route_end.polygon,
          radius: route.route_end.radius,
          status: activeStatus.fromNumber(route.route_end.status),
        }),
      name: route.route_name,
      start:
        route.route_start &&
        createStops({
          address: route.route_start.stop_address,
          code: route.route_start.stop_code,
          description: route.route_start.description,
          id: route.route_start.id,
          lat: route.route_start.lat,
          lng: route.route_start.lng,
          name: route.route_start.stop_name,
          polygon: route.route_start.polygon,
          radius: route.route_start.radius,
          status: activeStatus.fromNumber(route.route_start.status),
        }),
      stops: [],
      status: activeStatus.fromNumber(route.status),
    });
  });
};
