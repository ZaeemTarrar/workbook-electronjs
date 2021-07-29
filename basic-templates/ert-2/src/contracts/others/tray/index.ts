import React from 'react'
import { Dispatch } from 'redux'
import { T_StoreActionResponse } from '../../base'

/**
 * A Single Todo's Properties
 */
export type T_Tray = {}

/**
 * Todos Store Rules
 */
export interface I_TrayStore {
  activeTraySection?: string
}

/**
 * Action Rules
 */
export interface I_TrayActions {
  // addNote: (note: T_Todo) => T_StoreActionResponse
}
