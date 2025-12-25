'use client'

import { useState, type FormEvent } from 'react'

const WORK_TYPE_MAP: Record<string, string> = {
  'Курсовая работа': 'coursework',
  'Реферат': 'ref',
  'Сочинение': 'essay',
}

const VOLUME_OPTIONS = [
  '1–2 страницы',
  '3–5 страниц',
  '6–10 страниц',
  '10–15 страниц',
]

export default function Home() {
  const [topic, setTopic] = useState('')
  const [workType, setWorkType] = useState('')
  const [volume, setVolume] = useState('')
  const [errors, setErrors] = useState<{
    topic?: string
    workType?: string
    volume?: string
  }>({})

  const validate = (): boolean => {
    const newErrors: typeof errors = {}

    if (!topic.trim()) {
      newErrors.topic = 'Поле обязательно для заполнения'
    }

    if (!workType) {
      newErrors.workType = 'Выберите тип работы'
    }

    if (!volume) {
      newErrors.volume = 'Выберите объём'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    const params = new URLSearchParams({
      utm_source: 'landing',
      utm_medium: 'web',
      utm_campaign: 'textwork',
      topic: topic.trim(),
      work_type: WORK_TYPE_MAP[workType],
    })

    window.location.href = `https://kampus.ai/?${params.toString()}`
  }

  const isFormValid = topic.trim() && workType && volume

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:py-16">
      <div className="mx-auto max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 
            className="text-2xl font-semibold text-gray-900 inline-block"
            style={{
              boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)',
              padding: '8px 16px',
              borderRadius: '8px',
            }}
          >
            Кэмп Ракета
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Сгенерируй работу за пару минут
            </h2>
            <p className="text-sm text-gray-600 md:text-base">
              Введи тему, выбери формат и объём — дальше продолжишь в Кэмпе.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Topic */}
            <div>
              <label
                htmlFor="topic"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Тема/запрос
              </label>
              <textarea
                id="topic"
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value)
                  if (errors.topic) {
                    setErrors({ ...errors, topic: undefined })
                  }
                }}
                placeholder="Например: 'Причины и последствия индустриализации в России'"
                rows={4}
                className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.topic
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                }`}
              />
              {errors.topic && (
                <p className="mt-1 text-xs text-red-600">{errors.topic}</p>
              )}
            </div>

            {/* Work Type */}
            <div>
              <div className="mb-2 block text-sm font-medium text-gray-700">
                Тип работы
              </div>
              <div className="space-y-2">
                {Object.keys(WORK_TYPE_MAP).map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center rounded-lg border border-gray-300 px-4 py-3 transition-colors hover:bg-gray-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <input
                      type="radio"
                      name="workType"
                      value={type}
                      checked={workType === type}
                      onChange={(e) => {
                        setWorkType(e.target.value)
                        if (errors.workType) {
                          setErrors({ ...errors, workType: undefined })
                        }
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
              {errors.workType && (
                <p className="mt-1 text-xs text-red-600">{errors.workType}</p>
              )}
            </div>

            {/* Volume */}
            <div>
              <label
                htmlFor="volume"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Объём
              </label>
              <select
                id="volume"
                value={volume}
                onChange={(e) => {
                  setVolume(e.target.value)
                  if (errors.volume) {
                    setErrors({ ...errors, volume: undefined })
                  }
                }}
                className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 ${
                  errors.volume
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                }`}
              >
                <option value="">Выберите объём</option>
                {VOLUME_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.volume && (
                <p className="mt-1 text-xs text-red-600">{errors.volume}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:bg-gray-300"
            >
              Продолжить
            </button>

            <p className="text-center text-xs text-gray-500">
              Нажимая 'Продолжить', вы перейдёте на kampus.ai
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

