export interface FormData {
  [key: string]: string | number | boolean | string[]
}

interface SubmissionResult {
  success: boolean
  message: string
  submissionId: string
}

type SubmissionType = 'contact' | 'volunteer' | 'newsletter'

export class FormSubmissionService {
  private static _instance: FormSubmissionService
  private submissions: Map<string, FormData> = new Map()

  private constructor() {}

  static getInstance(): FormSubmissionService {
    if (!FormSubmissionService._instance) {
      FormSubmissionService._instance = new FormSubmissionService()
    }
    return FormSubmissionService._instance
  }

  async submit(type: SubmissionType, data: FormData): Promise<SubmissionResult> {
    const submissionId = `sub_${crypto.randomUUID().slice(0, 8)}`

    const enriched: FormData = {
      ...data,
      _submissionType: type,
      _submissionId: submissionId,
      _timestamp: Date.now(),
    }

    this.submissions.set(submissionId, enriched)

    await new Promise(resolve => setTimeout(resolve, 800))

    return {
      success: true,
      message: this.getSuccessMessage(type),
      submissionId,
    }
  }

  private getSuccessMessage(type: SubmissionType): string {
    const map: Record<SubmissionType, string> = {
      contact: 'Thank you for reaching out! We will get back to you shortly, Insha\'Allah.',
      volunteer: 'Jazakallahukhair! Your volunteer application has been received. We will contact you soon.',
      newsletter: 'You have been subscribed to our newsletter! Stay tuned for updates.',
    }
    return map[type]
  }

  getSubmissions(): FormData[] {
    return Array.from(this.submissions.values())
  }
}
