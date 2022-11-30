/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateLead: OnCreateLeadSubscription;
  onUpdateLead: OnUpdateLeadSubscription;
  onDeleteLead: OnDeleteLeadSubscription;
};

export type CreateLeadInput = {
  id?: string | null;
  name: string;
  email: string;
};

export type ModelLeadConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelLeadConditionInput | null> | null;
  or?: Array<ModelLeadConditionInput | null> | null;
  not?: ModelLeadConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Lead = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLeadInput = {
  id: string;
  name?: string | null;
  email?: string | null;
};

export type DeleteLeadInput = {
  id: string;
};

export type ModelLeadFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelLeadFilterInput | null> | null;
  or?: Array<ModelLeadFilterInput | null> | null;
  not?: ModelLeadFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelLeadConnection = {
  __typename: "ModelLeadConnection";
  items: Array<Lead | null>;
  nextToken?: string | null;
};

export type CreateLeadMutation = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLeadMutation = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLeadMutation = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type GetLeadQuery = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type ListLeadsQuery = {
  __typename: "ModelLeadConnection";
  items: Array<{
    __typename: "Lead";
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateLeadSubscription = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLeadSubscription = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLeadSubscription = {
  __typename: "Lead";
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateLead(
    input: CreateLeadInput,
    condition?: ModelLeadConditionInput
  ): Promise<CreateLeadMutation> {
    const statement = `mutation CreateLead($input: CreateLeadInput!, $condition: ModelLeadConditionInput) {
        createLead(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLeadMutation>response.data.createLead;
  }
  async UpdateLead(
    input: UpdateLeadInput,
    condition?: ModelLeadConditionInput
  ): Promise<UpdateLeadMutation> {
    const statement = `mutation UpdateLead($input: UpdateLeadInput!, $condition: ModelLeadConditionInput) {
        updateLead(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLeadMutation>response.data.updateLead;
  }
  async DeleteLead(
    input: DeleteLeadInput,
    condition?: ModelLeadConditionInput
  ): Promise<DeleteLeadMutation> {
    const statement = `mutation DeleteLead($input: DeleteLeadInput!, $condition: ModelLeadConditionInput) {
        deleteLead(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLeadMutation>response.data.deleteLead;
  }
  async GetLead(id: string): Promise<GetLeadQuery> {
    const statement = `query GetLead($id: ID!) {
        getLead(id: $id) {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLeadQuery>response.data.getLead;
  }
  async ListLeads(
    filter?: ModelLeadFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLeadsQuery> {
    const statement = `query ListLeads($filter: ModelLeadFilterInput, $limit: Int, $nextToken: String) {
        listLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLeadsQuery>response.data.listLeads;
  }
  OnCreateLeadListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLead">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLead {
        onCreateLead {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLead">>
  >;

  OnUpdateLeadListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLead">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLead {
        onUpdateLead {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLead">>
  >;

  OnDeleteLeadListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLead">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLead {
        onDeleteLead {
          __typename
          id
          name
          email
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLead">>
  >;
}
